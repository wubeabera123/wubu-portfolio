/* eslint-disable react/display-name */
import React, { useMemo } from 'react';
import { ComponentMap, getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';
import AuthorLayout from '../layouts/AuthorLayout';
import CourseLayout from '../layouts/CourseLayout';
import PostLayout from '../layouts/PostLayout';
import PostSimple from '../layouts/PostSimple';
import CustomLink from './Link';
import TOCInline from './TOCInline';
import Pre from './Pre';
import { BlogNewsletterForm } from './NewsletterForm';

const LAYOUTS = {
  AuthorLayout,
  CourseLayout,
  PostLayout,
  PostSimple,
};

const Wrapper: React.ComponentType<{ layout: string }> = ({
  layout,
  ...rest
}) => {
  const Layout = LAYOUTS[layout] ?? CourseLayout;
  return <Layout {...rest} />;
};

export const MDXComponents: ComponentMap = {
  Image,
  //@ts-ignore
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: Wrapper,
  //@ts-ignore
  BlogNewsletterForm,
};

interface Props {
  layout: string;
  mdxSource: string;
  [key: string]: unknown;
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }: Props) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
