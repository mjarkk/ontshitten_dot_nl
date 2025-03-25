import { useEffect, useState } from "react";

const OntshitCounter = () => {
  const [count, setCount] = useState(0);
  const [dailyCount, setDailyCount] = useState(0);

  useEffect(() => {
    // Base count starting from January 1, 2025
    const startDate = new Date(2025, 0, 1);
    const currentDate = new Date();

    // Calculate days since start date
    const daysDiff = Math.floor(
      (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
    );

    // Base count plus increments based on days passed
    // Start with 10,000 and add ~744 per day on average
    const baseCount = 10_000;
    const dailyIncrement = 744;

    // Add some extra based on the current time
    const minutesIntoDay =
      currentDate.getHours() * 60 + currentDate.getMinutes();
    const todayCount = Math.floor(
      (dailyIncrement / (24 * 60)) * minutesIntoDay,
    );

    // Calculate the total count
    const totalCount = daysDiff * dailyIncrement + baseCount + todayCount;
    const roundedCount = Math.floor(totalCount);

    // Animate counting effect
    const duration = 1000;
    const frames = 60;
    const increment = roundedCount / frames;

    let currentCount = 0;
    let frame = 0;

    const counterInterval = setInterval(() => {
      currentCount += increment;
      frame++;
      setCount(Math.floor(currentCount));

      if (frame === frames) {
        clearInterval(counterInterval);
        setCount(roundedCount);
      }
    }, duration / frames);

    setDailyCount(todayCount);
  }, []);

  return (
    <div className="transition-opacity duration-1000">
      <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#8b4513] to-[#c69c6d]"></div>

        <h2 className="text-3xl font-bold text-[#8b4513] mb-3 text-center">
          🚨 OFFICIËLE ONT-SHIT STATISTIEK 🚨
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <p className="text-lg mb-2 font-bold text-[#3d2314]">
              TOTAAL BEVRIJDE ZIELEN:
            </p>
            <div className="bg-[#f5e8dc] py-4 px-6 rounded-lg relative">
              <div className="absolute inset-0 bg-[#8b4513] opacity-5 rounded-lg"></div>
              <span className="text-5xl font-bold text-[#8b4513] font-mono relative">
                {count.toLocaleString("nl-NL")}
              </span>
              <div className="text-sm mt-2 text-[#a67c52] font-bold">
                GEVALIDEERD DOOR HET INSTITUUT VOOR FECALE BEVRIJDING™
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg mb-2 font-bold text-[#3d2314]">
              VANDAAG ONTSHIT:
            </p>
            <div className="bg-[#f5e8dc] py-4 px-6 rounded-lg relative">
              <div className="absolute inset-0 bg-[#8b4513] opacity-5 rounded-lg"></div>
              <span className="text-5xl font-bold text-[#8b4513] font-mono relative">
                {dailyCount.toLocaleString("nl-NL")}
              </span>
              <div className="text-sm mt-2 text-[#a67c52] font-bold">
                DRAMATISCH STIJGEND MET ELKE SECONDE!
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm italic text-[#3d2314]">
            *Cijfers bijgehouden door ons Ultra-Geavanceerde Shit-Monitoring
            Systeem™. Elk nummer vertegenwoordigt een ziel die zich heeft
            ONTTROKKEN aan de VERSTIKKENDE greep van de existentiële
            uitwerpselenstroom!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OntshitCounter;
