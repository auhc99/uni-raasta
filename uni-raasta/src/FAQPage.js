import React from 'react';
import {
  Typography,
  Box,
} from '@mui/material';
import FAQDropDown from './FAQDropDown';

const faqs = {
  Accommodations: [
    {
      question: "What if I need a portable Air-con or Fridge?",
      answer: "You can request these items from the housing services. Additional charges may apply."
    },
    // ...other accommodation FAQs
  ],
  Admissions: [
    {
      question: "How hard is it to get into NUS as an international student?",
      answer: "Admission is competitive and based on academic merit and available space."
    },
    // ...other admission FAQs
  ],
  Placements: [
    {
      question: "What is the average salary for a NUS student?",
      answer: "The average salary varies by field of study, but NUS graduates are highly sought after."
    },
    // ...other placement FAQs
  ]
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
