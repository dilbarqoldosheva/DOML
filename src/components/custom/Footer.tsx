import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-transparent py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>Copyright © 2022 DOML. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-gray-700 dark:hover:text-gray-300">
              Terms of Use
            </Link>
            <Link to="/privacy" className="hover:text-gray-700 dark:hover:text-gray-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

