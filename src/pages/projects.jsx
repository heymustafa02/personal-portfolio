// import Image from 'next/image'
// import Head from 'next/head'

// import { Card } from '@/components/Card'
// import { SimpleLayout } from '@/components/SimpleLayout'
// import drapier from '@/images/logos/drapier.svg'
// import walletedge from '@/images/logos/wallet-edge.png'
// import iconimg from '@/images/icon-image.jpg'
// const projects = [
//   {
//     name: 'Drapier : The Workspace that fuels Creativity',
//     description:
//       "Drapier is a personal online canvas for drawing, writing, and organizing ideas. Integrated with Excalidraw's developer tools, it offers a private space for creative note-taking and project planning.",
//     link: {
//       href: 'https://drapier.vercel.app/',
//       label: 'Live',
//     },
//     logo: drapier,
//   },
//   {
//     name: 'Wallet Edge : Your Finance friend',
//     description:
//       'Built a expense tracker that manages income, budget and expenses with ease. Built using NextJS, Tailwind CSS & Typescipt.',
//     link: {
//       href: 'https://walletedge.vercel.app/',
//       label: 'Live',
//     },
//     github: 'https://github.com',
//     logo: walletedge,
//   }
//   // {
//   //   name: 'Girls Who Code TXST',
//   //   description:
//   //     "I've created the entire structure of our Girls Who Code chapter, including our website! It utilizes Stripe's API to accept donations that fund our events and activities.",
//   //   link: { href: 'http://gwc-txst.com', label: 'gwc-txst.com' },
//   //   logo: logoHeart,
//   // },
//   // {
//   //   name: 'Java vs. C++',
//   //   description:
//   //     'Creating an ad-free website that highlights the syntax differences between Java and C++ to benefit the curriculum of my Object Oriented Programming class.',
//   //   link: {
//   //     href: 'https://cpp-vs-java.vercel.app/',
//   //     label: 'cpp-vs-java.vercel.app',
//   //   },
//   //   logo: logoAnimaginary,
//   // },
//   // // {
//   // //   name: 'OpenShuttle',
//   // //   description:
//   // //     'The schematics for the first rocket I designed that successfully made it to orbit.',
//   // //   link: { href: '#', label: 'github.com' },
//   // //   logo: logoOpenShuttle,
//   // // },
// ]

// function LinkIcon(props) {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//       <path
//         d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
//         fill="currentColor"
//       />
//     </svg>
//   )
// }

// export default function Projects() {
//   return (
//     <>
//       <Head>
//         <title>Projects- Mustafa Mallebhari</title>
//         <meta
//           name="description"
//         />
//         <link rel="icon" href={iconimg.src} type="image/jpg" />
//       </Head>
//       <SimpleLayout
//         title="A couple of my  personal projects."
//         intro="Built some cool stuff that you would love to see! Go check it out!"
//       >
//         <ul
//           role="list"
//           className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
//         >
//           {projects.map((project) => (
//             <Card as="li" key={project.name}>
//               <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
//                 <Image
//                   src={project.logo}
//                   alt=""
//                   className="h-8 w-8 rounded-full"
//                   unoptimized
//                 />
//               </div>
//               <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
//                 <Card.Link href={project.link.href}>{project.name}</Card.Link>
//               </h2>
//               <Card.Description>{project.description}</Card.Description>
//               <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
//                 <LinkIcon className="h-6 w-6 flex-none" />
//                 <span className="ml-2">{project.link.label}</span>
//               </p>
//             </Card>
//           ))}
//         </ul>
//       </SimpleLayout>
//     </>
//   )
// }
import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import drapier from '@/images/logos/drapier.svg'
import walletedge from '@/images/logos/wallet-edge.png'
import iconimg from '@/images/icon-image.jpg'
import apple from '@/images/logos/apple.png'
import mash from '@/images/logos/mash.png'

const projects = [
  {
    name: 'Drapier : The Workspace that fuels Creativity',
    description:
     "Drapier is a personal online canvas for drawing, writing, and organizing ideas. Integrated with Excalidraw's developer tools, it offers a private space for creative note-taking and project planning.",
    link: {
      href: 'https://drapier.vercel.app',
      label: 'Live',
    },
    logo: drapier,
  },
  {
         name: 'Wallet Edge : Your Finance friend',
         description:
           'Built a expense tracker that manages income, budget and expenses with ease. Built using NextJS, Tailwind CSS & Typescipt.',
         link: {
           href: 'https://walletedge.vercel.app/',
           label: 'Live',
         },
        logo: walletedge,
      },
  {
    name: 'Mash AI',
    description:
      "I've created a beautiful AI SaaS landing page naming it as Mash AI. ",
    link: { href: 'http://mashai.vercel.app', label: 'Live' },
    logo: mash,
  },
  {
    name: 'iPhone Landing Page Clone',
    description:
     "An immersive iPhone 15 Pro landing page built with GSAP and Three.js for stunning 3D animations and smooth interactions.",
    link: {
      href: 'https://apple-landing-site.vercel.app/',
      label: 'Live',
    },
    logo: apple,
  },
  {
    name: 'Web Design Agency ',
    description:
    "A sleek and modern landing page for a web design and development agency, showcasing services with smooth animations and clean UI.",
    link: {
      href: 'https://agency101.vercel.app/',
      label: 'Live',
    },
    logo: mash,
  },
  // {
  //   name: 'Web Design Agency ',
  //   description:
  //   "Another modern landing page for a web design and development agency, in a dark theme.",
  //   link: {
  //     href: 'https://mash-agency.vercel.app/',
  //     label: 'Live',
  //   },
  //   logo: drapier,
  // }


]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Mustafa Mallebhari</title>
        <meta name="description" content="My personal projects" />
        <link rel="icon" href={iconimg.src} type="image/jpg" />
      </Head>
      <SimpleLayout
        title="A few of my personal projects."
        intro="Built some cool stuff that you would love to see! Go check it out!"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 rounded-full"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="_blank" 
                  rel="noopener noreferrer" >{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}