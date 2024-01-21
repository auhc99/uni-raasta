import React from 'react';
import { Typography, Box } from '@mui/material';
import FAQDropDown from '../components/faq/FAQDropDown';

const faqs = {
  Accommodations: [
    {
      question: 'What if I need a portable Air-con or Fridge?',
      answer:
        'Portable air-conditioning units and fridges may be permitted upon request, subject to approval by the housing services. Additional charges and electricity fees may apply.',
    },
    {
      question: 'Options to continue my stay in on-campus accommodation',
      answer:
        'Continued stay is subject to your academic progression and availability. Priority is given to new students, but you may reapply each semester.',
    },
    {
      question: 'What are the various eating spots in and around NUS?',
      answer:
        'NUS is home to a variety of dining options including canteens, cafés, food courts, and restaurants serving a range of local and international cuisines.',
    },
    {
      question: 'How to apply for NUS on-campus housing?',
      answer:
        'You can apply for on-campus housing through the UHMS portal. The application involves selecting your preferred housing option and submitting any required documents.',
    },
    {
      question: 'Till when am I guaranteed on-campus housing?',
      answer:
        'Freshmen are typically guaranteed one year of housing. Beyond the first year, housing is not guaranteed and is subject to availability.',
    },
    {
      question: 'Can I get kicked out from housing?',
      answer:
        'Violations of the housing agreement, such as causing disturbances or damage, may result in the termination of your housing contract.',
    },
  ],
  Admissions: [
    {
      question: 'How hard is it to get into NUS as an international student?',
      answer:
        'Admission to NUS is highly competitive, especially for international students. It is based on academic excellence, personal achievements, and availability of space.',
    },
    {
      question: 'How expensive is NUS for international students?',
      answer:
        'Tuition fees for international students are higher than for local students. Fees vary by program and do not include living expenses or accommodation.',
    },
    {
      question: 'What courses are available for international students?',
      answer:
        'International students have access to a wide range of undergraduate and postgraduate courses across various faculties and schools at NUS.',
    },
    {
      question: 'What is the cost of living for international students?',
      answer:
        'The cost of living depends on lifestyle, but generally includes accommodation, food, transportation, and personal expenses. The estimated cost is around SGD 10,000 to SGD 12,000 per academic year.',
    },
    {
      question: 'What documents are needed for admission?',
      answer:
        'Required documents typically include academic transcripts, standardized test scores, a personal statement, letters of recommendation, and a passport copy.',
    },
  ],
  Placements: [
    {
      question: 'What is the average salary for a NUS student?',
      answer:
        'The average starting salary for NUS graduates can vary widely depending on the field of study, but is generally competitive with market rates.',
    },
    {
      question: 'What is the employment rate at NUS?',
      answer:
        'NUS has a high employment rate, with a large percentage of students finding employment or pursuing further studies within six months after graduation.',
    },
    {
      question: 'What companies come to recruit from NUS?',
      answer:
        'A diverse range of companies, from local startups to multinational corporations, recruit from NUS. These span various industries including finance, technology, engineering, and more.',
    },
    {
      question: 'What all resources are available to help me get internships/jobs?',
      answer:
        'NUS provides numerous resources such as career fairs, internship programs, career advising, workshops, and networking events to assist with internships and job placements.',
    },
  ],
};

// Main FAQPage Component
const FAQPage = () => {
  return (
    <Box my={2}>
      <Typography variant="h4" color="primary" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {Object.entries(faqs).map(([category, faqs], index) => (
        <FAQDropDown key={index} category={category} faqs={faqs} />
      ))}
    </Box>
  );
};

export default FAQPage;
