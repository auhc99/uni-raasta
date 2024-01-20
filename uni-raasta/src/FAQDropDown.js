import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQDropDown = ({ category, faqs }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ borderBottom: '1px solid #ccc' }}>
        <Typography variant="h6">{category}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ flexDirection: 'column', padding: 2, backgroundColor: '#f9f9f9' }}>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ backgroundColor: '#fff', marginBottom: '8px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#f0f0f0' }}>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQDropDown;
