import { Switch, Route } from "wouter";
import ScrollToTop from "@/components/ScrollToTop";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import SocialProof from "@/components/SocialProof";
import Home from "@/pages/Home";
import MasterTraining from "@/pages/MasterTraining";
import Certification from "@/pages/Certification";
import Readers from "@/pages/Readers";
import Shop from "@/pages/Shop";
import TheAncients from "@/pages/TheAncients";
import How from "@/pages/How";
import Unboxing from "@/pages/Unboxing";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";

import FAQ from "@/pages/FAQ";
import Videos from "@/pages/Videos";
import Blog from "./pages/Blog";
import ArticlePage from "./pages/ArticlePage";
import Affiliates from "@/pages/Affiliates";
import Testimonials from "@/pages/Testimonials";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ScrollToTop />
      <ExitIntentPopup />
      <SocialProof />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/master-training" component={MasterTraining} />
        <Route path="/certification" component={Certification} />
        <Route path="/readers" component={Readers} />
        <Route path="/shop" component={Shop} />
        <Route path="/the-ancients" component={TheAncients} />
        <Route path="/how" component={How} />
        <Route path="/unboxing" component={Unboxing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />

        <Route path="/faq" component={FAQ} />
        <Route path="/videos" component={Videos} />
        <Route path="/wisdom" component={Blog} />
        <Route path="/wisdom/:slug" component={ArticlePage} />
        <Route path="/affiliates" component={Affiliates} />
        <Route path="/testimonials" component={Testimonials} />
        <Route>404 Page Not Found</Route>
      </Switch>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
