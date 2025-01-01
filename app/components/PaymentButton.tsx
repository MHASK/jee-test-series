'use client';

interface PaymentButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function PaymentButton({ className, children }: PaymentButtonProps) {
  const handlePayment = () => {
    window.location.href = 'https://rzp.io/rzp/VhpUMKOx';
  };

  return (
    <button 
      onClick={handlePayment}
      className={className}
    >
      {children}
    </button>
  );
} 