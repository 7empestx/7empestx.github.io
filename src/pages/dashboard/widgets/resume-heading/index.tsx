// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { Box, Header, Link } from '@cloudscape-design/components';
import { WidgetConfig } from '../interfaces';

export const resumeHeading: WidgetConfig = {
  definition: { defaultRowSpan: 3, defaultColumnSpan: 1 },
  data: {
    icon: 'list',
    title: 'Resume Heading',
    description: 'Resume Heading',
    header: ResumeHeadingHeader,
    content: ResumeHeadingContent,
    footer: ResumeHeadingFooter,
  },
};

function ResumeHeadingHeader() {
  return <Header variant="h2">About Me</Header>;
}

function ResumeHeadingFooter() {
  return <></>;
}

function ResumeHeadingContent() {
  return (
    <>
      <Box variant="awsui-key-label">Supported platforms</Box>
      <Box variant="p">
        Highly skilled Software Engineer and Electronics Technician with an active Security Clearance, eager to
        collaborate with other dedicated professionals in leveraging innovation to address complex software and hardware
        requirements. Committed to delivering exceptional final products that not only meet but exceed customer
        expectations by combining a strong technical background with a passion for creative problem-solving.
      </Box>
    </>
  );
}
