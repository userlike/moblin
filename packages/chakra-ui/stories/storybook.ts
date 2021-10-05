import { ComponentType, ReactNode } from 'react';

export interface StoryConfiguration {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: ComponentType<any>;
  decorators?: Decorator[];
  parameters?: StoryParameters;
}

export interface CreateStoryPayload<P> {
  title: string;
  component?: ComponentType<P>;
  args?: Partial<P>;
  argTypes?: ArgType<P>;
  decorators?: Array<Decorator>;
  parameters?: StoryParameters;
}

interface StoryParameters {
  chromatic?: {
    disable?: boolean;
    disableSnapshot?: boolean;
    diffThreshold?: number;
    pauseAnimationAtEnd?: boolean;
    delay?: number;
    viewports?: number[];
  };
  docs?: {
    source?: { type?: 'code' };
    page?: React.FC | null;
    inlineStories?: boolean;
    disable?: boolean;
    iframeHeight?: number;
  };
  layout?: 'fullscreen' | 'centered' | 'padded';
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type Decorator = (Story: ComponentType<{}>) => JSX.Element;

type ArgType<P> = {
  [Property in keyof P]?: {
    options?: string[];
    mapping?: Record<string, ReactNode>;
    control?:
      | {
          type: 'select' | 'radio' | 'date' | 'color';
          labels?: Record<string, string>;
          presetColors?: ({ title: string; color: string } | string)[];
        }
      | false;
    action?: string;
  };
};
