import Hero from "@/components/navigation/mainPage/hero"

export default function Home() {
  // const location = useLocation()

  // useEffect(() => {
  //   ReactGA.event({
  //     category: "User",
  //     action: "Visited the main page",
  //   })
  // }, [location])

  return (
    <main>
      <Hero />
      {/* <FeaturedAgencies /> */}
      {/* <HowItWorks /> */}
      {/* <AboutUs /> */}
      {/* <EndSection /> */}
    </main>
  )
}
