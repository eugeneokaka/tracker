'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function OnboardingRequired() {
  const router = useRouter();

  const handleGoToOnboarding = () => {
    toast.success('Redirecting to onboarding...', {
      duration: 1500,
    });
    router.push('/onboarding');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 border border-zinc-200">
        <div className="text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.932-3.254L12.5 7.5m0 0l-2.35-3.246c-.567-1.587.392-3.254 1.932-3.254h13.856z" />
            </svg>
          </div>
          
          <h2 className="text-xl font-semibold text-zinc-900 mb-2">
            Please Complete Onboarding
          </h2>
          
          <p className="text-zinc-600 mb-6 text-sm leading-relaxed">
            You need to complete your profile onboarding before you can create jobs. 
            This helps us ensure all users have complete information.
          </p>
          
          <button
            onClick={handleGoToOnboarding}
            className="w-full bg-zinc-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
          >
            Complete Onboarding
          </button>
          
          <button
            onClick={() => window.history.back()}
            className="w-full mt-3 text-zinc-500 hover:text-zinc-700 text-sm font-medium transition-colors focus:outline-none focus:underline"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
