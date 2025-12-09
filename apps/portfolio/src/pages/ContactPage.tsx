import { Container } from '@/components/ui/Container';
import { H1, Lead, H2, P } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'your.email@example.com',
      description: 'Send me an email anytime',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      description: "Let's connect professionally",
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/yourusername',
      description: 'Check out my open source work',
    },
    {
      icon: '🐦',
      title: 'Twitter',
      value: '@yourusername',
      description: 'Follow for tech insights',
    },
  ];

  const availability = [
    {
      title: 'Freelance Projects',
      status: 'Available',
      description: 'Open to interesting freelance opportunities',
    },
    {
      title: 'Consulting',
      status: 'Available',
      description: 'Architecture reviews and technical consulting',
    },
    {
      title: 'Speaking',
      status: 'Available',
      description: 'Tech talks and conference presentations',
    },
    {
      title: 'Mentoring',
      status: 'Limited',
      description: '1-on-1 mentoring for developers',
    },
  ];

  return (
    <div className="space-y-16 py-12">
      <Container>
        <section className="space-y-6">
          <div className="space-y-4">
            <Badge variant="secondary">Get in Touch</Badge>
            <H1>Contact Me</H1>
            <Lead className="max-w-3xl">
              I'm always interested in hearing about new projects,
              opportunities, and collaborations. Feel free to reach out through
              any of the channels below.
            </Lead>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="space-y-4">
              <H2>Send a Message</H2>
              <P>
                Fill out the form below and I'll get back to you as soon as
                possible.
              </P>
            </div>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <H2>Other Ways to Connect</H2>
              <P>You can also reach me through these platforms:</P>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactMethods.map((method) => (
                <Card
                  key={method.title}
                  className="transition-shadow hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{method.icon}</span>
                      <div>
                        <CardTitle className="text-base">
                          {method.title}
                        </CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-mono text-sm text-blue-600 dark:text-blue-400">
                      {method.value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <H2>Availability</H2>
              <div className="space-y-3">
                {availability.map((item) => (
                  <Card key={item.title}>
                    <CardContent className="flex items-start justify-between p-4">
                      <div className="space-y-1">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                      <Badge
                        variant={
                          item.status === 'Available' ? 'default' : 'secondary'
                        }
                        className="shrink-0"
                      >
                        {item.status}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pt-12">
          <Card className="bg-gradient-to-br from-blue-50/5 to-gray-50/5 dark:from-blue-950/5 dark:to-gray-950/5">
            <CardContent className="space-y-4 p-8 text-center">
              <H2>Looking Forward to Hearing from You</H2>
              <P className="mx-auto max-w-2xl">
                Whether you have a project in mind, need technical advice, or
                just want to connect, I'm always happy to chat. I typically
                respond within 24-48 hours.
              </P>
            </CardContent>
          </Card>
        </section>
      </Container>
    </div>
  );
}
