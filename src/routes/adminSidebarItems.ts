import AddTour from "@/pages/Admin/AddTour";
import AddTourType from "@/pages/Admin/AddTourType";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(()=>import("@/pages/Admin/Analytics"));


export const adminSidebarItems: ISidebarItem[] = [
    {
      title: "Dashboard",
      items: [
        {
          title: "Analytics",
          url: "/admin/analytics",
          Component:Analytics
        },
      ],
    },
    {
      title: "Tour Management",
      items: [
        {
          title: "Add Tour Type",
          url: "/admin/add-tour-type",
            Component:AddTourType
        },
        {
          title: "Add Tour",
          url: "/admin/add-tour",
            Component:AddTour
        },
      ],
    },
]