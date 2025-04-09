import React from 'react';

const organizers = [
  {
    name: 'Prof. Hien Van Nguyen',
    role: 'General Chair',
    affiliation: 'University of Houston',
    image: 'https://images.unsplash.com/photo-1744224827405-6c5b82736aa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D',
    profileUrl: 'https://www.ece.uh.edu/faculty/nguyen', // Replace with actual URL
  },
  {
    name: 'Prof. S. Kevin Zhou',
    role: 'Program Chair',
    affiliation: 'Institute of Computing Technology, Chinese Academy of Sciences',
    image: 'https://images.unsplash.com/photo-1744225159985-841d5efb5b23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D',
    profileUrl: 'https://sz.ustc.edu.cn/en/en_research_show/42.html', // Replace with actual URL
  },
  {
    name: 'Prof. Vishal M. Patel',
    role: 'Technical Chair',
    affiliation: 'Johns Hopkins University',
    image: 'https://images.unsplash.com/photo-1744225709746-ce5b95baaacf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D',
    profileUrl: 'https://engineering.jhu.edu/faculty/vishal-patel/', // Replace with actual URL
  },
  {
    name: 'Prof. Ngan Le',
    role: 'Technical Chair',
    affiliation: 'University of Arkansas',
    image: 'https://images.unsplash.com/photo-1744224929001-4cae66a05fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D',
    profileUrl: 'https://engineering.uark.edu/electrical-engineering-computer-science/electrical-engineering-faculty/uid/thile/name/Thi+Hoang+Ngan+Le/', // Replace with actual URL
  },
{
    name: 'Prof. Yuyin Zhou',
    role: 'Technical Chair',
    affiliation: 'University of California, Santa Cruz',
    image: 'https://images.unsplash.com/photo-1744228081497-4ab20e4eb0df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D',
    profileUrl: 'https://campusdirectory.ucsc.edu/cd_detail?uid=yzhou284', // Replace with actual URL
  },
{
    name: 'Dr. Sheng Liu',
    role: 'Technical Chair',
    affiliation: 'Stanford University',
    image: 'https://images.unsplash.com/photo-1744228427580-1dbc08257c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D',
    profileUrl: 'https://profiles.stanford.edu/325104', // Replace with actual URL
  },
  {
    name: 'Akash Awasthi',
    role: 'Technical Committee Member',
    affiliation: 'University of Houston',
    image: 'https://images.unsplash.com/photo-1744224573793-5064c79a4c11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D',
    profileUrl: 'https://scholar.google.co.in/citations?user=IM6EGDIAAAAJ&hl=en', // Replace with actual URL
  }
];

export default function Organizers() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Organizing Committee</h1>
      
      <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {organizers.map((person) => (
          <div key={person.name} className="text-center">
            <div className="space-y-4">
              <a href={person.profileUrl} target="_blank" rel="noopener noreferrer">
                <img
                  className="mx-auto h-40 w-40 rounded-full cursor-pointer"
                  src={person.image}
                  alt={person.name}
                />
              </a>
              <div className="space-y-2">
                <div className="text-lg leading-6 font-medium text-gray-900">{person.name}</div>
                <div className="text-sm text-indigo-600">{person.role}</div>
                <div className="text-sm text-gray-500">{person.affiliation}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
