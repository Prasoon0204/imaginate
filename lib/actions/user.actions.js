"use server";

import { revalidatePath } from "next/cache";
import { create, findOne, findOneAndUpdate, findByIdAndDelete } from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

// CREATE
export const createUser = async (user) => {
  try {
    await connectToDatabase();

    const newUser = await create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

// READ
export const getUserById = async (userId) => {
  try {
    await connectToDatabase();

    const user = await findOne({ clerkId: userId });

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export const updateUser = async (clerkId, user) => {
  try {
    await connectToDatabase();

    const updatedUser = await findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export const deleteUser = async (clerkId) => {
  try {
    await connectToDatabase();

    // Find user to delete
    const userToDelete = await findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

// USE CREDITS
export const updateCredits = async (userId, creditFee) => {
  try {
    await connectToDatabase();

    const updatedUserCredits = await findOneAndUpdate(
      { _id: userId },
      { $inc: { creditBalance: creditFee } },
      { new: true }
    );

    if (!updatedUserCredits) throw new Error("User credits update failed");

    return JSON.parse(JSON.stringify(updatedUserCredits));
  } catch (error) {
    handleError(error);
  }
}

export default {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  updateCredits,
};
