import React, { useState } from 'react';
import { X, Search, PhoneCall, MessageSquare, ExternalLink, ShieldCheck, Landmark } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { BANK_HELPLINES } from '../data/bankHelplines';

export const BankHelplinesModal = () => {
  const { lang, t, getLocalized } = useLanguage();
  const { isBankModalOpen, setIsBankModalOpen } = useApp();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all'); // 'all' | 'bank' | 'upi'

  if (!isBankModalOpen) return null;

  const filteredList = BANK_HELPLINES.filter((item) => {
    const matchesCategory = filter === 'all' || item.category === filter;
    const name = getLocalized(item, 'name').toLowerCase();
    const phone = item.phone.toLowerCase();
    const query = search.toLowerCase();
    return matchesCategory && (name.includes(query) || phone.includes(query));
  });

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-t-3xl sm:rounded-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden pb-safe">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-3 bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                {t('bankDirectoryTitle')}
              </h2>
              <p className="text-[11px] text-slate-400">
                {t('bankDirectorySubtitle')}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsBankModalOpen(false)}
            className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white active:scale-95 transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter */}
        <div className="p-4 border-b border-slate-800/80 space-y-2.5 bg-slate-950/40">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('searchBankPlaceholder')}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-teal-500 transition-colors"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'hi' ? 'सभी' : 'All'}
            </button>
            <button
              onClick={() => setFilter('bank')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                filter === 'bank'
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'hi' ? 'बैंक' : 'Banks'}
            </button>
            <button
              onClick={() => setFilter('upi')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                filter === 'upi'
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'hi' ? 'UPI व वॉलेट्स' : 'UPI & Wallets'}
            </button>
          </div>
        </div>

        {/* Helplines List */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1">
          {filteredList.map((item) => {
            const name = getLocalized(item, 'name');
            const smsInstruction = getLocalized(item, 'smsBlock');

            return (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-sm font-bold text-white block">
                      {name}
                    </span>
                    <span className="text-xs text-teal-400 font-mono font-semibold">
                      {item.displayPhone}
                    </span>
                  </div>

                  <a
                    href={`tel:${item.phone}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow active:scale-95 transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5 fill-white" />
                    <span>{t('directCall')}</span>
                  </a>
                </div>

                {/* SMS Blocking Code */}
                {smsInstruction && (
                  <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-start gap-2 text-[11px] text-slate-300">
                    <MessageSquare className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-amber-300 font-semibold">{t('smsBlockCode')}:</strong>{' '}
                      {smsInstruction}
                    </span>
                  </div>
                )}

                {/* Portal link */}
                {item.url && (
                  <div className="mt-2 flex justify-end">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-slate-400 hover:text-teal-300 inline-flex items-center gap-1"
                    >
                      <span>{t('officialPortal')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}

          {filteredList.length === 0 && (
            <div className="text-center py-8 text-slate-400 text-xs">
              No entries matching your search. Call 1930 directly.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
