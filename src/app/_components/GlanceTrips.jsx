import { Landmark } from "lucide-react";
import { Mountain } from "lucide-react";
import { Wallet } from "lucide-react";
import { Utensils } from "lucide-react";
import { CalendarDays } from "lucide-react";
import {
  Building2,
  Users,
  IndianRupee,
  Globe,
  Clock,
  Phone,
  Plug,
} from "lucide-react";

export default function GlanceTrips() {
  return (
    <>
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto bg-[#f6f4f0] p-10 rounded-md">
          <h2 className="text-4xl font-semibold text-gray-900 mb-12">
            India at a glance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-900">
            {/* Row 1 */}
            <div className="flex items-start gap-4">
              <Building2 className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Capital City</h3>
                <p className="text-muted-foreground">
                  Delhi (population, 33.8 million)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Population</h3>
                <p className="text-muted-foreground">1.4 billion</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <IndianRupee className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Currency</h3>
                <p className="text-muted-foreground">Indian Rupees (INR)</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex items-start gap-4">
              <Globe className="w-10 h-10 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Language</h3>
                <p className="text-muted-foreground">
                  Hindi, Urdu, Tamil, Bengali, Kashmiri, Kannada, Marathi,
                  Gujarati, Telugu, English
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Time Zone</h3>
                <p className="text-muted-foreground">
                  (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Calling Code</h3>
                <p className="text-muted-foreground">+91</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex items-start gap-4">
              <Plug className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Electricity</h3>
                <p className="text-muted-foreground">
                  Type C (European 2-pin) Type D (Old British 3-pin) Type M (see
                  D)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-5xl px-32">
        <h1 className="text-4xl font-bold mb-6">Learn more about India</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <InfoCard
            icon={<CalendarDays className="w-5 h-5" />}
            text="Best time to visit"
          />
          <InfoCard
            icon={<Landmark className="w-5 h-5" />}
            text="History and culture"
          />
          <InfoCard
            icon={<Globe className="w-5 h-5" />}
            text="Geography and environment"
          />
          <InfoCard
            icon={<Utensils className="w-5 h-5" />}
            text="Eating and drinking"
          />
          <InfoCard
            icon={<Mountain className="w-5 h-5" />}
            text="Top places to visit in India"
          />
          <InfoCard
            icon={<Wallet className="w-5 h-5" />}
            text="Money matters"
          />
        </div>
      </div>
    </>
  );
}

const InfoCard = ({ icon, text }) => (
  <div className="flex items-center gap-2 p-4 bg-muted rounded-md border hover:shadow transition-all">
    <div className="p-2 rounded-full bg-primary text-primary-foreground">
      {icon}
    </div>
    <span className="font-medium">{text}</span>
  </div>
);
