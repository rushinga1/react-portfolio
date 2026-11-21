import React, { useState } from 'react';
import { Mail, Phone, Check, Copy, Send, CheckCircle2, Calendar, MapPin, Clock, Github, Linkedin, Instagram } from 'lucide-react';
import { ContactFormData, ContactFormErrors } from '../types';

interface ContactSectionProps {
  standalone?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ standalone = false }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    projectType: 'Web Application (React / Vue.js)',
    timeline: 'Within 1-2 months',
    budget: 'Flexible / Scope-Based',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookedSlotSuccess, setBookedSlotSuccess] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g., name@domain.com).';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = 'Please provide a brief message of at least 15 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleCopyValue = (key: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      projectType: 'Web Application (React / Vue.js)',
      timeline: 'Within 1-2 months',
      budget: 'Flexible / Scope-Based',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const availableSlots = [
    'Thursday — 10:00 AM CAT',
    'Thursday — 2:30 PM CAT',
    'Friday — 11:00 AM CAT',
    'Monday — 1:00 PM CAT'
  ];

  return (
    <section id="contact" className={`py-14 sm:py-20 ${standalone ? '' : 'border-t border-zinc-200/80 dark:border-zinc-800/80'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Initiate Collaboration
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Let's build something exceptional.
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Have a project in mind, need technical leadership, or want to audit your application's architecture? Leave a message below or book a discovery conversation.
          </p>
        </div>

        {/* 2-Column Grid: Left Contact Info & Calendar, Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct channels and availability */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-6">
              <div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Average response time is under 12 hours on business days.
                </p>
              </div>

              {/* Primary & Secondary Emails */}
              <div className="space-y-2.5">
                <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-between gap-3">
                  <div className="min-w-0 space-y-0.5">
                    <span className="text-[11px] text-zinc-400 block">Primary Email</span>
                    <a
                      href="mailto:mugishaguevara12@gmail.com"
                      className="flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span className="truncate">mugishaguevara12@gmail.com</span>
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyValue('primary-email', 'mugishaguevara12@gmail.com')}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-200/80 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md transition-colors shrink-0 cursor-pointer"
                    aria-label="Copy primary email address"
                  >
                    {copiedKey === 'primary-email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-between gap-3">
                  <div className="min-w-0 space-y-0.5">
                    <span className="text-[11px] text-zinc-400 block">Secondary Email</span>
                    <a
                      href="mailto:rushingaguevara12@gmail.com"
                      className="flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span className="truncate">rushingaguevara12@gmail.com</span>
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyValue('secondary-email', 'rushingaguevara12@gmail.com')}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-200/80 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md transition-colors shrink-0 cursor-pointer"
                    aria-label="Copy secondary email address"
                  >
                    {copiedKey === 'secondary-email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone Numbers */}
                <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-between gap-3">
                  <div className="min-w-0 space-y-0.5">
                    <span className="text-[11px] text-zinc-400 block">Phone Numbers</span>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-mono text-zinc-900 dark:text-zinc-100">
                      <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                      <a href="tel:0791895352" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        0791 895 352
                      </a>
                      <span className="text-zinc-400" aria-hidden="true">/</span>
                      <a href="tel:0732795406" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        0732 795 406
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyValue('phone', '0791 895 352 / 0732 795 406')}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-200/80 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md transition-colors shrink-0 cursor-pointer"
                    aria-label="Copy phone numbers"
                  >
                    {copiedKey === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Geographic Info */}
              <div className="space-y-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/80 text-xs text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>Kigali, Rwanda (Central Africa Time · UTC+2)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>Available: 09:00 — 18:00 CAT (Mon — Fri)</span>
                </div>
              </div>

              {/* Find me on */}
              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 space-y-2.5">
                <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  Find me on
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="https://github.com/rushinga1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>github.com/rushinga1</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="p-2 text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram profile"
                    className="p-2 text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Quick Discovery Call Simulator Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowScheduleModal(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-100 hover:bg-zinc-200/80 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-xl transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Book 20-Min Architecture Discovery</span>
                </button>
              </div>
            </div>

            {/* Quick Guarantees Box */}
            <div className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 text-xs space-y-2">
              <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                Engagement Standards
              </div>
              <ul className="space-y-1.5 text-zinc-500 dark:text-zinc-400">
                <li>· Strict NDA and confidentiality standard</li>
                <li>· Full IP ownership transferred upon project delivery</li>
                <li>· Comprehensive technical documentation & runbooks</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="block text-xs font-semibold text-zinc-900 dark:text-zinc-200">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Ada Lovelace"
                        className={`w-full px-3.5 py-2 text-xs rounded-lg border bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 transition-colors ${
                          errors.fullName
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-zinc-200 dark:border-zinc-800 focus:ring-blue-500'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-500">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-semibold text-zinc-900 dark:text-zinc-200">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ada@example.com"
                        className={`w-full px-3.5 py-2 text-xs rounded-lg border bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-zinc-200 dark:border-zinc-800 focus:ring-blue-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500">{errors.email}</p>
                      )}
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Project Type */}
                    <div className="space-y-1.5">
                      <label htmlFor="projectType" className="block text-xs font-semibold text-zinc-900 dark:text-zinc-200">
                        Scope / Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                      >
                        <option value="Web Application (React / Vue.js)">Web Application (React / Vue.js)</option>
                        <option value="UI/UX Design & Figma Prototyping">UI/UX Design & Figma Prototyping</option>
                        <option value="Client-Server System & REST API">Client-Server System & REST API</option>
                        <option value="Browser-Based Game Development">Browser-Based Game Development</option>
                        <option value="E-Commerce / Business Tool">E-Commerce / Business Tool</option>
                      </select>
                    </div>

                    {/* Estimated Scope / Timeline */}
                    <div className="space-y-1.5">
                      <label htmlFor="budget" className="block text-xs font-semibold text-zinc-900 dark:text-zinc-200">
                        Engagement Type
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                      >
                        <option value="Flexible / Scope-Based">Flexible / Scope-Based</option>
                        <option value="Freelance / Client Commission">Freelance / Client Commission</option>
                        <option value="Group / Collaborative Project">Group / Collaborative Project</option>
                        <option value="Full-Time / Internship Role">Full-Time / Internship Role</option>
                      </select>
                    </div>

                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="message" className="block text-xs font-semibold text-zinc-900 dark:text-zinc-200">
                        Project Overview & Goals <span className="text-red-500">*</span>
                      </label>
                      <span className="text-[11px] text-zinc-400 font-mono">
                        {formData.message.length} chars (min 15)
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe what you are building, existing stack, and ideal timeline..."
                      className={`w-full px-3.5 py-2.5 text-xs rounded-lg border bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 transition-colors resize-none ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-zinc-200 dark:border-zinc-800 focus:ring-blue-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 rounded-lg transition-colors shadow-sm cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Transmitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              ) : (
                /* Confirmed Submission Card */
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      Inquiry Received Successfully
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-zinc-800 dark:text-zinc-200">{formData.fullName}</strong>. MUGISHA RUSHINGA Guevara has received your project briefing and will follow up with you at <strong className="text-zinc-800 dark:text-zinc-200">{formData.email}</strong> shortly.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-4 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Discovery Booking Modal */}
      {showScheduleModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => {
            setShowScheduleModal(false);
            setBookedSlotSuccess(false);
          }}
        >
          <div
            className="w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                  Select a Discovery Call Slot
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  20-minute Zoom technical consultation with MUGISHA RUSHINGA Guevara
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowScheduleModal(false);
                  setBookedSlotSuccess(false);
                }}
                className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 text-sm"
              >
                ✕
              </button>
            </div>

            {!bookedSlotSuccess ? (
              <div className="space-y-3">
                <div className="space-y-2">
                  {availableSlots.map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`w-full p-3 text-xs text-left rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        selectedSlot === slot
                          ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-500 text-blue-700 dark:text-blue-300 font-semibold'
                          : 'border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 text-zinc-800 dark:text-zinc-200'
                      }`}
                    >
                      <span>{slot}</span>
                      {selectedSlot === slot && <Check className="w-3.5 h-3.5 text-blue-600" />}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  disabled={!selectedSlot}
                  onClick={() => setBookedSlotSuccess(true)}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-300 dark:disabled:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
                >
                  Confirm Reservation
                </button>
              </div>
            ) : (
              <div className="py-4 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  Call Confirmed!
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  Reserved for {selectedSlot}. Calendar invite and meeting link dispatched.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
