export const navLinks = [
  { href: "/about", label: "Who We Are" },
  { href: "/team", label: "Team" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/alumni", label: "Alumni" },
  { href: "/partners", label: "Partners" },
] as const;

/** Term currently open for applications; shown on Home, Apply, and the footer */
export const applicationTerm = "Summer 2027";

export const applyLink = {
  href: "/apply",
  label: "Apply",
  external:
    "https://uwaterloo.ca/school-of-accounting-and-finance/form/student-investment-fund-applica2",
};

export const socialLinks = [
  {
    href: "https://www.linkedin.com/school/uwaterloo-accounting-and-finance/",
    label: "LinkedIn",
    icon: "linkedin",
  },
  { href: "https://www.instagram.com/uwaterloo/", label: "Instagram", icon: "instagram" },
  { href: "https://www.facebook.com/uwaterloo", label: "Facebook", icon: "facebook" },
] as const;

export const contact = {
  school: "School of Accounting and Finance",
  building: "Hagey Hall, room 3157",
  address: "200 University Avenue West",
  city: "Waterloo, ON, Canada N2L 3G1",
  phone: "+1 519 888 4567 ext. 40373",
  email: "saf@uwaterloo.ca",
};

export const site = {
  name: "Student Investment Fund",
  short: "SIF",
  university: "University of Waterloo",
  school: "School of Accounting and Finance",
};
