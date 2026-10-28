import React from 'react';
import { useShop } from '../../context/ShopContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast() {
  const { toasts, removeToast } = useShop();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center justify-between p-4 bg-[#FFFFFF] border-l-4 border-[#7A1C2E] shadow-xl rounded-r-lg border border-[#EFE8DE] transition-all duration-300 transform translate-y-0"
        >
          <div className="flex items-center space-x-3">
            {toast.type === 'info' ? (
              <Info className="w-5 h-5 text-[#C85A32] shrink-0" />
            ) : toast.type === 'warn' ? (
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-[#7A1C2E] shrink-0" />
            )}
            <p className="text-sm font-medium text-[#2D2A26] leading-snug">
              {toast.message}
            </p>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-stone-400 hover:text-stone-700 ml-3 shrink-0 p-1 rounded transition-colors"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
