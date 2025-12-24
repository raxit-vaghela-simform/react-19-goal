import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { features } from "../utils/featureData";

const demoNavigation = [
  {
    name: "Overview",
    href: "/",
    segment: "",
    icon: React.createElement(DashboardIcon),
  },
  ...features.map((feature) => ({
    name: feature.navTitle || feature.title,
    href: `/feature/${feature.id}`,
    segment: `feature/${feature.id}`,
    icon: React.createElement(DashboardIcon),
  })),
];

export const NAVIGATION = demoNavigation.map(({ name, segment, icon }) => ({
  segment,
  title: name,
  icon,
}));
