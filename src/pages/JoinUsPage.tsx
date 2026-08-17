import { PageHero } from "../components/shared/PageHero";
import { GetInvolved } from "../components/GetInvolved";
import { VolunteerTrajectory } from "../components/VolunteerTrajectory";

export default function JoinUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Us"
        title="Be Part of the Change"
        description="There are many ways to support our mission and help empower underserved students across Nepal."
        image="/images/student_celebration.jpg"
        imageAlt="Students celebrating success with Vidhata"
      />
      <GetInvolved hideHeader />
      <VolunteerTrajectory />
    </>
  );
}
