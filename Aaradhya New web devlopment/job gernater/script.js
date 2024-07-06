const jobs = [
    { title: 'Software Developer', description: 'Develop software applications.', requirements: { workEnvironment: 'office', dutyTime: 'day', gender: 'male' }, skills: ['programming', 'problem-solving'], languages: ['JavaScript', 'Python', 'Java'] },
    { title: 'Graphic Designer', description: 'Design graphics and layouts.', requirements: { workEnvironment: 'home', dutyTime: 'day', gender: 'female' }, skills: ['creative', 'design software'], languages: ['Photoshop', 'Illustrator', 'InDesign'] },
    { title: 'Customer Support', description: 'Provide customer support via phone and email.', requirements: { workEnvironment: 'home', dutyTime: 'day', gender: 'female' }, skills: ['communication', 'problem-solving'], languages: ['English', 'Spanish', 'French'] },
    { title: 'Data Analyst', description: 'Analyze data and generate reports.', requirements: { workEnvironment: 'office', dutyTime: 'day', gender: 'male' }, skills: ['data analysis', 'statistics'], languages: ['SQL', 'R', 'Python'] },
    { title: 'Night Shift Security Guard', description: 'Monitor premises during night.', requirements: { workEnvironment: 'office', dutyTime: 'night', gender: 'male' }, skills: ['vigilance', 'physical endurance'], languages: [] },
    { title: 'Freelance Writer', description: 'Write content for various clients.', requirements: { workEnvironment: 'home', dutyTime: 'day', gender: 'male' }, skills: ['writing', 'research'], languages: ['English', 'Spanish', 'German'] },
    { title: 'Digital Marketer', description: 'Develop and manage digital marketing campaigns.', requirements: { workEnvironment: 'office', dutyTime: 'day', gender: 'female' }, skills: ['digital marketing', 'analytics'], languages: ['SEO', 'Google Ads', 'Social Media'] },
    { title: 'IT Support Specialist', description: 'Provide technical support to clients.', requirements: { workEnvironment: 'office', dutyTime: 'day', gender: 'male' }, skills: ['technical troubleshooting', 'customer service'], languages: ['Networking', 'Windows', 'Linux'] },
    { title: 'Web Developer', description: 'Build and maintain websites.', requirements: { workEnvironment: 'home', dutyTime: 'day', gender: 'female' }, skills: ['web development', 'programming'], languages: ['HTML/CSS', 'JavaScript', 'PHP'] },
    { title: 'Project Manager', description: 'Manage and oversee projects.', requirements: { workEnvironment: 'office', dutyTime: 'day', gender: 'male' }, skills: ['project management', 'leadership'], languages: ['Project Planning', 'Budget Management'] },
    { title: 'Content Creator', description: 'Create content for various platforms.', requirements: { workEnvironment: 'home', dutyTime: 'day', gender: 'female' }, skills: ['content creation', 'social media'], languages: ['Writing', 'Video Production', 'Editing'] },
    { title: 'Sales Representative', description: 'Sell products or services.', requirements: { workEnvironment: 'office', dutyTime: 'day', gender: 'female' }, skills: ['sales', 'negotiation'], languages: ['Sales Techniques', 'Client Relationship'] },
    { title: 'Translator', description: 'Translate documents and media.', requirements: { workEnvironment: 'home', dutyTime: 'day', gender: 'female' }, skills: ['translation', 'language proficiency'], languages: ['Spanish', 'French', 'Chinese'] },
    { title: 'Virtual Assistant', description: 'Assist clients with administrative tasks.', requirements: { workEnvironment: 'home', dutyTime: 'day', gender: 'male' }, skills: ['administrative support', 'organizational skills'], languages: ['English', 'German', 'Japanese'] },
    { title: 'Online Tutor', description: 'Provide online tutoring sessions.', requirements: { workEnvironment: 'home', dutyTime: 'day', gender: 'female' }, skills: ['teaching', 'subject expertise'], languages: ['Mathematics', 'English', 'Science'] },
    { title: 'Fitness Trainer', description: 'Provide fitness training and advice.', requirements: { workEnvironment: 'office', dutyTime: 'day', gender: 'male' }, skills: ['fitness training', 'motivational skills'], languages: [] },
    { title: 'Event Planner', description: 'Plan and coordinate events.', requirements: { workEnvironment: 'office', dutyTime: 'day', gender: 'female' }, skills: ['event planning', 'organization'], languages: [] },
    { title: 'Delivery Driver', description: 'Deliver goods to customers.', requirements: { workEnvironment: 'home', dutyTime: 'day', gender: 'male' }, skills: ['driving', 'navigation'], languages: [] },
    { title: 'Mover', description: 'Help people move their belongings.', requirements: { workEnvironment: 'home', dutyTime: 'day', gender: 'male' }, skills: ['physical strength', 'lifting'], languages: [] },
    { title: 'Babysitter', description: 'Take care of children.', requirements: { workEnvironment: 'home', dutyTime: 'day', gender: 'female' }, skills: ['childcare', 'patience'], languages: [] },
    { title: 'Dog Walker', description: 'Walk dogs for clients.', requirements: { workEnvironment: 'home', dutyTime: 'day', gender: 'female' }, skills: ['animal handling', 'responsibility'], languages: [] },
    { title: 'Retail Associate', description: 'Assist customers in a retail environment.', requirements: { workEnvironment: 'office', dutyTime: 'day', gender: 'female' }, skills: ['customer service', 'point of sale systems'], languages: ['Retail Sales', 'Customer Interaction'] },
    { title: 'Barista', description: 'Prepare and serve coffee.', requirements: { workEnvironment: 'office', dutyTime: 'day', gender: 'female' }, skills: ['coffee making', 'customer service'], languages: [] },
    { title: 'Fast Food Worker', description: 'Prepare and serve fast food.', requirements: { workEnvironment: 'office', dutyTime: 'day', gender: 'male' }, skills: ['food preparation', 'fast-paced environment'], languages: [] },
    { title: 'Dishwasher', description: 'Clean dishes in a restaurant.', requirements: { workEnvironment: 'office', dutyTime: 'day', gender: 'male' }, skills: ['dishwashing', 'cleaning'], languages: [] },
    { title: 'Host/Hostess', description: 'Greet and seat restaurant guests.', requirements: { workEnvironment: 'office', dutyTime: 'day', gender: 'female' }, skills: ['hospitality', 'customer service'], languages: [] },
    { title: 'Receptionist', description: 'Manage front desk operations.', requirements: { workEnvironment: 'office', dutyTime: 'day', gender: 'female' }, skills: ['administrative', 'communication'], languages: [] },
    { title: 'Security Guard', description: 'Provide security services.', requirements: { workEnvironment: 'office', dutyTime: 'day', gender: 'male' }, skills: ['vigilance', 'security procedures'], languages: [] },
    { title: 'Housekeeper', description: 'Clean and maintain households or commercial spaces.', requirements: { workEnvironment: 'home', dutyTime: 'day', gender: 'female' }, skills: ['cleaning', 'organization'], languages: [] },
    { title: 'Landscaper', description: 'Design and maintain outdoor spaces.', requirements: { workEnvironment: 'home', dutyTime: 'day', gender: 'male' }, skills: ['landscaping', 'gardening'], languages: [] },
    { title: 'Painter', description: 'Paint buildings and structures.', requirements: { workEnvironment: 'home', dutyTime: 'day', gender: 'male' }, skills: ['painting', 'detail-oriented'], languages: [] },
    { title: 'Janitor', description: 'Clean and maintain buildings.', requirements: { workEnvironment: 'office', dutyTime: 'day', gender: 'male' }, skills: ['janitorial', 'maintenance'], languages: [] },
    { title: 'Handyman', description: 'Perform general maintenance and repairs.', requirements: { workEnvironment: 'home', dutyTime: 'day', gender: 'male' }, skills: ['maintenance', 'repair skills'], languages: [] },
    { title: 'Caretaker', description: 'Provide care for elderly or disabled individuals.', requirements: { workEnvironment: 'home', dutyTime: 'day', gender: 'female' }, skills: ['caregiving', 'compassion'], languages: [] },
];

document.getElementById('jobForm').addEventListener('submit', showResults);

function showResults(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userPreferences = Object.fromEntries(formData.entries());
    const results = document.getElementById('jobResults');

    const matchedJobs = jobs.filter(job => {
        return Object.keys(job.requirements).every(key => job.requirements[key] === userPreferences[key]) &&
               (job.languages.length === 0 || job.languages.some(lang => userPreferences.languages.includes(lang)));
    });

    results.innerHTML = '<h2>Job Results:</h2>';
    if (matchedJobs.length === 0) {
        results.innerHTML += '<p>No matching jobs found.</p>';
    } else {
        matchedJobs.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.classList.add('job');
            jobElement.innerHTML = `<h3>${job.title}</h3><p>${job.description}</p><p>Skills Needed: ${job.skills.join(', ')}</p><p>Languages Required: ${job.languages.join(', ')}</p>`;
            results.appendChild(jobElement);
        });
    }
}
