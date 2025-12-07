import React from 'react';
import Container from "../common/Container.jsx";
import { Image } from "../../utils/Global.jsx";
import { profile, social, experience, latestProjects } from "../../data/data.jsx";
import {ReactIcon} from "../common/ReactIcon.jsx";

function AboutMe() {
  const name = profile?.fullName || profile?.name || ''
  const role = profile?.role || ''
  const location = profile?.location || ''
  const stats = [
    { label: 'Experience', value: '6+ years' },
    { label: 'Company Experiences', value: `${experience?.length || 0}+` },
    { label: 'Projects', value: `${latestProjects?.length || 0}+` }
  ]
  return (
    <div className={'bg-primary-xlight'}>
      <Container className={'py-12'} id={'about-me'}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="flex items-center sm:justify-end">
            <div className="relative">
              <div className="absolute -left-6 -top-6 size-24 rounded-full bg-primary/10 blur-2xl"></div>
              <div className="absolute right-8 -bottom-8 w-28 h-16 rounded-full bg-secondary/10 blur-2xl"></div>
              <div className="relative rounded-2xl ring-1 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-900 shadow-xl p-4">
                <div className="relative">
                  <div className="absolute inset-[-10px] rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700"></div>
                  <Image src={profile?.image} className="size-80 object-cover rounded-xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl font-semibold">About Me</p>
              <p className="text-4xl md:text-5xl text-primary-dark font-bold">{name}</p>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{role} • {profile?.currentCompany}</p>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">{profile?.longSummary}</p>
            <div className="flex flex-wrap gap-8">
              {stats.map((s, i) => (
                <div key={i} className="fcc flex-col">
                  <div className="text-2xl font-semibold text-primary-dark">{s.value}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {social.map((item, idx) => (
                <a key={idx} href={item?.href} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <ReactIcon name={item?.label?.toLowerCase()} />
                  <span className="text-sm font-medium">{item?.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutMe;
