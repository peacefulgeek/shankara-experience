import { Switch, Route } from "wouter";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import SocialProof from "@/components/SocialProof";
import Home from "@/pages/Home";
import MasterTraining from "@/pages/MasterTraining";
import Certification from "@/pages/Certification";
import Readers from "@/pages/Readers";
import Shop from "@/pages/Shop";
import HowToShankara from "@/pages/HowToShankara";
import Unboxing from "@/pages/Unboxing";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import Returns from "@/pages/Returns";
import FAQ from "@/pages/FAQ";
import Videos from "@/pages/Videos";
import Blog from "@/pages/Blog";
import Affiliates from "@/pages/Affiliates";
import Testimonials from "@/pages/Testimonials";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SocialProof />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/master-training" component={MasterTraining} />
        <Route path="/certification" component={Certification} />
        <Route path="/readers" component={Readers} />
        <Route path="/shop" component={Shop} />
        <Route path="/how-to-shankara" component={HowToShankara} />
        <Route path="/unboxing" component={Unboxing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/returns" component={Returns} />
        <Route path="/faq" component={FAQ} />
        <Route path="/videos" component={Videos} />
        <Route path="/blog" component={Blog} />
        <Route path="/affiliates" component={Affiliates} />
        <Route path="/testimonials" component={Testimonials} />
        <Route>404 Page Not Found</Route>
      </Switch>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
