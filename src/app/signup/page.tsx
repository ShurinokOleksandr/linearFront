
import { SignUpForm } from '@/app/signup/components/SignUpForm/SignUpForm';
import Loading from '@/app/signup/loading';
import React, { Suspense } from 'react';

export default function Auth() {
 	return (
		 <Suspense fallback={<Loading/>}>
			 <SignUpForm/>
		 </Suspense>
	);
}
