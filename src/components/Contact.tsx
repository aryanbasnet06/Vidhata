import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-8">Get in Touch</h2>
          <div className="w-16 h-1 bg-[#5B8A8D] mx-auto mb-12" />
          <p className="text-lg text-gray-600">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-gray-700">
                Name
              </label>
              <Input 
                id="name" 
                placeholder="Your name" 
                className="border-gray-300 focus:border-[#5B8A8D] focus:ring-[#5B8A8D]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-700">
                Email
              </label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com" 
                className="border-gray-300 focus:border-[#5B8A8D] focus:ring-[#5B8A8D]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-gray-700">
              Message
            </label>
            <Textarea 
              id="message" 
              placeholder="Your message..." 
              rows={6}
              className="border-gray-300 focus:border-[#5B8A8D] focus:ring-[#5B8A8D]"
            />
          </div>

          <div className="text-center">
            <Button 
              type="submit" 
              className="bg-[#5B8A8D] hover:bg-[#4a7174] text-white px-12 py-6 rounded-full text-sm tracking-wide shadow-lg hover:shadow-xl transition-all"
            >
              Send Message
            </Button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-16 text-center space-y-3">
          <p className="text-sm text-gray-600">
            Email: contact.vidhata@gmail.com
          </p>
          <p className="text-sm text-gray-600">
            Location: Kathmandu, Nepal
          </p>
        </div>
      </div>
    </section>
  );
}