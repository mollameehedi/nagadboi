"use client"
import Card from '@/components/Common/Card';
import Text from '@/components/Common/Text';
import React, { useState } from 'react'


const BusinessSettings = ({children}) => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased flex">
     {children}
    </div>
  );
};

export default BusinessSettings