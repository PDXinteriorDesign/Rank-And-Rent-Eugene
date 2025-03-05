
import React from 'react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProjectTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const ProjectTypeSelect = ({ value, onChange }: ProjectTypeSelectProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="projectType">Project Type *</Label>
      <Select
        value={value}
        onValueChange={onChange}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select project type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="residential">Residential</SelectItem>
          <SelectItem value="commercial">Commercial</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProjectTypeSelect;
