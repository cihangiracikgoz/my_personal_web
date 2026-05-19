import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Hr,
  Section,
} from "@react-email/components";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function EmailTemplate({
  firstName,
  lastName,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body style={body}>
        <Container style={container}>
          <Heading style={heading}>
            {firstName} {lastName} - New Message
          </Heading>
          <Hr style={hr} />
          <Section>
            <Text style={label}>From</Text>
            <Text style={value}>
              {firstName} {lastName}
            </Text>
            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>
            <Text style={label}>Message</Text>
            <Text style={value}>{message}</Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            Sent from your portfolio contact form
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#E0E1DD",
  fontFamily: "Inter, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid rgba(27, 38, 59, 0.2)",
  borderRadius: "10px",
  margin: "40px auto",
  padding: "32px",
  maxWidth: "480px",
};

const heading = {
  color: "#1B263B",
  fontSize: "20px",
  fontWeight: "600" as const,
  margin: "0 0 16px",
};

const hr = {
  borderColor: "rgba(27, 38, 59, 0.2)",
  margin: "20px 0",
};

const label = {
  color: "rgba(27, 38, 59, 0.6)",
  fontSize: "12px",
  fontWeight: "500" as const,
  margin: "0 0 2px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
};

const value = {
  color: "#1B263B",
  fontSize: "14px",
  margin: "0 0 16px",
  lineHeight: "1.5",
};

const footer = {
  color: "rgba(27, 38, 59, 0.4)",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0",
};