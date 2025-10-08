import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import { pixelBasedPreset } from '@react-email/tailwind';

interface RaycastMagicLinkEmailProps {
  magicLink?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const RaycastMagicLinkEmail = ({
  magicLink,
}: RaycastMagicLinkEmailProps) => (
  <>
    <Tailwind
      config={{
        presets: [pixelBasedPreset],
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >


      <Html>
        <Head />
        <Body className="bg-white font-sans">
          <Preview>Log in with this magic link.</Preview>

          <Container className="mx-auto p-5 pb-12 bg-[url('/static/raycast-bg.png')] bg-bottom bg-no-repeat">
            <Img
              src={`${baseUrl}/static/raycast-logo.png`}
              width={48}
              height={48}
              alt="Raycast"
              className="w-12 h-12"
            />

            <Heading className="text-3xl font-bold mt-12">🪄 Your magic link</Heading>

            <Section className="my-6">
              <Text className="text-base leading-7 mb-4">
                <Link href={magicLink} className="text-[#FF6363] underline">
                  👉 Click here to sign in 👈
                </Link>
              </Text>

              <Text className="text-base leading-7">
                If you didn&apos;t request this, please ignore this email.
              </Text>
            </Section>

            <Text className="text-base leading-7">
              Best,
              <br />- Raycast Team
            </Text>

            <Hr className="border-t border-gray-200 mt-12" />

            <Img
              src={`${baseUrl}/static/raycast-logo.png`}
              width={32}
              height={32}
              className="w-8 h-8 filter grayscale my-5"
              alt=""
            />

            <Text className="text-xs text-[#8898aa] ml-1">Raycast Technologies Inc.</Text>
            <Text className="text-xs text-[#8898aa] ml-1">
              2093 Philadelphia Pike #3222, Claymont, DE 19703
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  </>
);

RaycastMagicLinkEmail.PreviewProps = {
  magicLink: 'https://raycast.com',
} as RaycastMagicLinkEmailProps;

export default RaycastMagicLinkEmail;
