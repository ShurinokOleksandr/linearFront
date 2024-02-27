import { MyIssuesIcon, RoadMapsIcon, InboxIcon, ViewsIcon } from '@/shared/ui';

export const main_pages = [
    {
        icon:<InboxIcon/>,
        href:'/inbox',
        text:'Inbox'
    },
    {
        href:'/my-issues/assigned',
        icon:<MyIssuesIcon/>,
        text:'My issues'
    },
    {
        href:'/views/issues',
        icon:<ViewsIcon/>,
        text:'Views'
    },
    {
        href:'/roadmap/active',
        icon:<RoadMapsIcon/>,
        text:'Roadmaps'
    },
];