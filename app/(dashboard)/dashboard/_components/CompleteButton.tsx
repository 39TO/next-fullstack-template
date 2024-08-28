'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import { actionTodoComplete } from '../action';

export const CompleteButton = ({ id }: { id: string }) => {
  return (
    <div>
      <Button
        size="sm"
        variant="outline"
        onClick={() => actionTodoComplete(id)}>
        Done
      </Button>
    </div>
  );
};
