// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { HelpPanel, Header } from '@cloudscape-design/components';
import { ExternalLinkGroup, InfoLink, useHelpPanel } from '../../commons';

export function DashboardMainInfo() {
  return (
    <p>
      Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides resizeable computing
      capacity&mdash;literally, servers in Amazon's data centers&mdash;that you use to build and host your software
      systems.
    </p>
  );
}

export function DashboardHeader({ actions }: { actions: React.ReactNode }) {
  return (
    <Header variant="h1" actions={actions}>
      Grant Starkman
    </Header>
  );
}
