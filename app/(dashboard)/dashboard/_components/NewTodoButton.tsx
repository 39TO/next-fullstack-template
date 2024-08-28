'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { actionTodoCreate } from '../action';

export const NewTodoButton = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Add!</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <form action={actionTodoCreate}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Title</Label>
                <Input name="title" className="col-span-2 h-8" />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Button variant="secondary" type="submit" size="sm">
                  Add
                </Button>
              </div>
            </div>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};
