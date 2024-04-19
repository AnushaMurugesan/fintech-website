import Grid from "@/components/Grid/Grid";
import Navbar from "@/components/Navbar/Navbar";
import BoostingBusiness from "@/section/BoostingBusiness/BoostingBusiness";
import GrowingCompanies from "@/section/GrowingCompanies/GrowingCompanies";
import LandingScreen from "@/section/LandingScreen/LandingScreen";
function Website() {
  return (
    <div>
      <Navbar />
      <LandingScreen />
      <GrowingCompanies />
    </div>
  );
}
export default Website;
