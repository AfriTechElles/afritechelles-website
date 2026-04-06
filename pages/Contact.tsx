import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-white dark:bg-brand-black min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Info Side */}
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Parlons de votre <span className="text-brand-pink">Avenir</span></h1>
                <p className="text-lg text-gray-600 dark:text-neutral-400 mb-12">
                    Vous avez une question sur nos programmes, souhaitez devenir mentor ou proposer un partenariat ? N'hésitez pas.
                </p>

                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="p-4 bg-brand-pink/10 rounded-2xl text-brand-pink">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Email</h3>
                            <p className="text-gray-500">afritechelles@gmail.com</p>
                            <p className="text-gray-500">afritechelles@gmail.com</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="p-4 bg-brand-purple/10 rounded-2xl text-brand-purple">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Bureaux</h3>
                            <p className="text-gray-500">Cameroun</p>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="bg-gray-50 dark:bg-neutral-900 p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-lg">
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-900 dark:text-white">Prénom</label>
                            <input type="text" className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-pink outline-none text-gray-900 dark:text-white" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-900 dark:text-white">Nom</label>
                            <input type="text" className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-pink outline-none text-gray-900 dark:text-white" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-900 dark:text-white">Email</label>
                        <input type="email" className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-pink outline-none text-gray-900 dark:text-white" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-900 dark:text-white">Message</label>
                        <textarea rows={4} className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-pink outline-none text-gray-900 dark:text-white"></textarea>
                    </div>

                    <button type="button" className="w-full bg-brand-pink text-white font-bold py-4 rounded-xl hover:bg-brand-deepPink transition-colors flex items-center justify-center gap-2">
                        Envoyer le message <Send size={18} />
                    </button>
                </form>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;