import { Users, Heart, Briefcase, Award } from 'lucide-react';

export function Impact() {
  const stats = [
    {
      icon: Users,
      value: '20,000+',
      label: 'Lives Impacted',
    },
    {
      icon: Heart,
      value: '500+',
      label: 'Active Volunteers',
    },
    {
      icon: Briefcase,
      value: '15+',
      label: 'Programs Running',
    },
    {
      icon: Award,
      value: '10+',
      label: 'Years of Service',
    },
  ];

  return (
    <section id="impact" className="py-20 bg-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white/90 mb-4">Our Impact</h2>
          <h3 className="text-4xl mb-6">Creating Change That Matters</h3>
          <p className="text-white/90 max-w-3xl mx-auto">
            Through dedication, collaboration, and community support, we've achieved 
            remarkable milestones in our mission to empower communities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-4xl mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl mb-4">Join Our Mission</h4>
              <p className="text-white/90 mb-6">
                Every contribution, whether time, resources, or expertise, helps us 
                expand our reach and deepen our impact. Together, we can create a 
                better future for communities in need.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl mb-1">₹50L+</div>
                <div className="text-white/80">Funds Raised This Year</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl mb-1">25+</div>
                <div className="text-white/80">Partner Organizations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
