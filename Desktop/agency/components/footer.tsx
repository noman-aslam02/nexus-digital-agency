'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Web Development', href: '/services' },
        { label: 'UI/UX Design', href: '/services' },
        { label: 'Digital Marketing', href: '/services' },
        { label: 'Brand Strategy', href: '/services' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Email', href: 'mailto:hello@nexus.digital' },
        { label: 'LinkedIn', href: '#' },
        { label: 'Twitter', href: '#' }
      ]
    }
  ];

  return (
    <motion.footer
      className="bg-black border-t border-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              NEXUS Digital
            </h3>
            <p className="text-gray-400 text-sm">
              Transform your business with cutting-edge digital solutions.
            </p>
          </div>

          {columns.map((column) => (
            <motion.div key={column.title}>
              <h4 className="font-semibold text-white mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <motion.li key={link.label} whileHover={{ x: 4 }}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} NEXUS Digital. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
