import React from 'react';

export default function CallForPapers() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Call for Papers</h1>
      
      {/* Submission Platform */}
      <div className="mt-8 bg-indigo-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-indigo-900">Submission Platform</h2>
        <p className="mt-2 text-indigo-700">
          All submissions should be made through the CMT platform:
          <a 
            href="https://cmt3.research.microsoft.com/MIL3ID2020" 
            className="ml-2 text-indigo-600 hover:text-indigo-900 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit Paper
          </a>
        </p>
      </div>

      {/* Publication */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Publication</h2>
        <p className="mt-4 text-gray-600">
          The workshop proceedings will be published as a volume in the Springer Lecture Notes in Computer Science (LNCS) series.
        </p>
      </div>

      {/* Submission Guidelines */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Submission Guidelines</h2>
        
        <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-6">
              {/* Paper Format */}
              <div>
                <h3 className="text-lg font-medium text-gray-900">Paper Format</h3>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                  <li>8 pages maximum including references</li>
                  <li>Format: Lecture Notes in Computer Science (LNCS) style</li>
                  <li>File format: PDF only (other formats not accepted)</li>
                  <li>Authors should use Springer's proceedings templates (LaTeX or Word)</li>
                  <li>Authors are encouraged to include their ORCIDs</li>
                </ul>
              </div>

              {/* Double-Blind Review */}
              <div>
                <h3 className="text-lg font-medium text-gray-900">Double-Blind Review Process</h3>
                <p className="mt-2 text-gray-600">
                  The review process is strictly double-blind. Authors must ensure their submissions are properly anonymized 
                  following MICCAI 2025 Anonymity guidelines.
                </p>
              </div>

              {/* Supplemental Material */}
              <div>
                <h3 className="text-lg font-medium text-gray-900">Supplemental Material</h3>
                <p className="mt-2 text-gray-600">
                  Optional supplemental material may include:
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  <li>Videos of results</li>
                  <li>Anonymized related submissions</li>
                  <li>Extended proofs and mathematical derivations</li>
                  <li>Technical reports</li>
                </ul>
                <p className="mt-2 text-gray-600 italic">
                  Note: Reviewers are not obliged to review supplemental material
                </p>
              </div>

              {/* Submission Policy */}
              <div>
                <h3 className="text-lg font-medium text-gray-900">Submission Policy</h3>
                <p className="mt-2 text-gray-600">
                  By submitting a paper, authors acknowledge that NO paper of substantially similar content has been or 
                  will be submitted to another conference or workshop until workshop decisions are made.
                </p>
              </div>

              {/* Camera-Ready Submission */}
              <div>
                <h3 className="text-lg font-medium text-gray-900">Camera-Ready Submission</h3>
                <p className="mt-2 text-gray-600">
                  For accepted papers, authors need to submit a zip file containing:
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  <li>Completed copyright form</li>
                  <li>Camera-ready PDF</li>
                  <li>Source files (Word/LaTeX with all associated files)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900">Important Resources</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a 
            href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Springer Guidelines & Templates
          </a>
          <a 
            href="#"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            MICCAI Anonymity Guidelines
          </a>
        </div>
      </div>

      {/* Acknowledgment Section */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-gray-700 text-base">
        <p>
          The{' '}
          <a
            href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            Microsoft CMT service
          </a>{' '}
          was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
        </p>
      </div>
    </div>
  );
}
