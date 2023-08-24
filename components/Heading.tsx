import { LucideIcon } from 'lucide-react';
import React from 'react'

interface HeadingProps {
    title:string;
    description:string;
    icon:LucideIcon;
    iconColor?: string;
    bgColor?: string;
}

const Heading = ({
    title,
    description,
    icon,
    iconColor,
    bgColor
}: HeadingProps
) => {
  return (
    <div>
      Heading Component
    </div>
  )
}

export default Heading
