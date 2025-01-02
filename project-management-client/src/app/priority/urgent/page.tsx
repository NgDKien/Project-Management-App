import React from "react";
import { Priority } from "@/state/api";
import ReusablePriorityPage from "../reusablePriorityPage/page";

const Urgent = () => {
    return <ReusablePriorityPage priority={Priority.Urgent} />;
};

export default Urgent;