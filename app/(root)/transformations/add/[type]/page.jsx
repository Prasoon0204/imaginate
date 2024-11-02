import React from 'react'
import Header from '@/components/shared/Header'
import { transformationTypes } from '@/constants'
import TransformationForm from '@/components/shared/TransformationForm';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server'

const AddTransformationTypePage = async ({params}) => {
  const { type } = await params;
  const transformation = transformationTypes[type];

  const { userId } = await auth();

  const user = await getUserById(userId);

  return (
    <>
      <Header 
      title = {transformation.title}
      subTitle = {transformation.subTitle} 
      />
      <TransformationForm 
      action="Add" 
      userId={user._id}
      creditBalance = {user.creditBalance}
      />
    </>
  )
}

export default AddTransformationTypePage