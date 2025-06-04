import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function Home() {
  return (
    <div className="relative bg-gradient-to-br from-white via-indigo-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            variants={fadeIn}
            custom={0}
          >
            MICCAI 2025 Workshop
          </motion.h1>
          <motion.p
            className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            variants={fadeIn}
            custom={1}
          >
            Emerging LLM/LMM Applications in Medical Imaging (ELAMI)
          </motion.p>
        </motion.div>

        {/* About Section */}
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-indigo-900">About the Workshop</h2>
          <div className="mt-4 prose prose-lg text-gray-600 max-w-none">
            <p>
            The rapid advancement of large language models (LLMs) and multimodal large language models (MLLMs) 
            has introduced groundbreaking possibilities for advancing medical imaging and healthcare applications. 
            These technologies, grounded in state-of-the-art generative AI, are poised to transform how clinicians 
            and researchers interact with complex datasets, enabling novel workflows and decision-making paradigms 
            within the medical imaging domain.
          </p>
          <p className="mt-4">
            LLMs have demonstrated their ability to process and synthesize vast amounts of textual information, 
            offering insights that assist in clinical interpretation, diagnostic reasoning, and knowledge discovery. 
            MLLMs extend these capabilities by integrating modalities such as text, images, and real-time data streams, 
            opening unique opportunities to enhance medical imaging tasks.
          </p>
          </div>
        </motion.div>

        {/* Key Applications */}
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-indigo-900">Key Applications</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Supporting radiologists and pathologists in synthesizing imaging findings with clinical histories',
              'Developing adaptive systems with user-specific workflows',
              'Improving image-guided procedures through multimodal data integration',
              'Enabling efficient annotation through natural language interaction',
              'Enhancing complex medical diagnosis with multi-agent LMM systems',
              'Facilitating collaborative decision-making among specialists',
            ].map((application, index) => (
              <motion.div
                key={application}
                className="bg-white hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 ease-in-out shadow-md rounded-lg p-6"
                variants={fadeIn}
                custom={index * 0.2}
              >
                <p className="text-gray-700">{application}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workshop Topics */}
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-indigo-900">Key Discussion Topics</h2>
          <motion.div
            className="mt-6 bg-white rounded-lg shadow-lg p-6"
            variants={fadeIn}
          >
            <ul className="space-y-4 text-gray-600">
              {[
                'Bias and hallucination challenges in medical applications',
                'Privacy concerns and information security',
                'Model transparency and interpretability',
                'Training strategies for limited medical datasets',
                'Multi-agent systems for collaborative diagnosis',
                'Ethical considerations in real-world deployment',
              ].map((topic, i) => (
                <motion.li key={topic} className="flex items-start" custom={i} variants={fadeIn}>
                  <span className="h-6 flex items-center sm:h-7">
                    <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="ml-2">{topic}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-8 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center">
            <motion.h2
              className="text-2xl font-bold text-indigo-900"
              variants={fadeIn}
              custom={0}
            >
              Join the Discussion
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-indigo-700"
              variants={fadeIn}
              custom={0.2}
            >
              Be part of this groundbreaking workshop exploring the intersection of LLMs, MLLMs, and medical imaging.
              Share your research, insights, and collaborate with leading experts in the field.
            </motion.p>
          </div>
        </motion.div>

        {/* Acknowledgment Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-gray-100 to-white rounded-xl p-8 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center">
            <motion.h2
              className="text-2xl font-bold text-indigo-900"
              variants={fadeIn}
              custom={0}
            >
              Acknowledgment
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-700"
              variants={fadeIn}
              custom={0.2}
            >
          
            </motion.p>
            <motion.p
              className="mt-4 text-lg text-gray-700"
              variants={fadeIn}
              custom={0.3}
            >
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
