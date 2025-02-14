"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as Icons from "lucide-react";
import { File } from "lucide-react"; // Default fallback icon
import { motion } from "framer-motion";

interface Document {
  title: string;
  description: string;
  iconName: keyof typeof Icons;
  imageUrl: string;
  language: string;
}

export default function DocumentsSection() {
  const documents: Document[] = [
    {
      title: "Whitepaper EN",
      description:
        "In the Blockrose Club ecosystem, the virtual and physical worlds come together.",
      iconName: "FileText",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/8071/d18f/ddf6426d905900806b1c893d9c481dd8?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IgaS05x8FbpHAlZ8DQ-mf9h9GwVQYKbM~70nhT1fgsByPobWiS2j4Rdksc02YY~ehEJrMxxw55~3OB6ZVs1Cf~0bAha2kZ2a19KnQTjEPAopk9k6LjzKpBp~~83Kd1FSwjsiqygVyHjx5EsBeyQPBpn~ClGbaKlu3188ExiINoZGOP2XaxFJVbGnTt8JZfWMF8wduChQ3USB9SbPSppaemmYomVBcRFtDsDtSzDs2FkXPVfk4AxcHYbVU54gQzy7gfoxU2MpwnYsA6A3Nmy8X2PIOJG6JVxBNUWTxMxqgrIWh12vbYN8UMs4z2a383kDwBfgfiVBQey3x8ubK8-QaA__",
      language: "EN",
    },
    {
      title: "Whitepaper DE",
      description:
        "In the Blockrose Club ecosystem, the virtual and physical worlds come together.",
      iconName: "FileText",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/fb46/6274/fb9065c4b42aec023edf10ffe4f31329?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J7nCTWlULP6e3IQCVxe1LdLomXjOyhz96blJRe9KL7hYV5kCw7dSLPhm6U5cm8mARtAyU1LU4eiBpI8JhYC39XTbEALGBlByUY2AKvQug65p-S~EiLgD715dYvK1AL0U01bNEHHNpz1zF-aE4GNFRstz8jrPB3N7vek6CJs5WvITl~q8FrQalS-wRP2b9zQlyzIiuCt-6vd-UgQZxZVmi2diu6gCQDOFgoEL~go6ei~qZgKtEtlwQrAuQE9aUezvbvfHnYg03D9Rf599YUeRkOWauh1hOBUfRyvP5jckHR1yVtntYkPhIOoFt9YCzeHnp6ORalF0fOQKi9UUtaFHGQ__",
      language: "DE",
    },
    {
      title: "Pitchdeck EN",
      description:
        "In the Blockrose Club ecosystem, the virtual and physical worlds come together.",
      iconName: "Presentation",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/6a6e/91f9/260175459dab8292161027e3da0d8ced?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cKYtl9WZH8NS6rTpfgoAFvQlEOSBJ5u6Kyjt4D~-xv5FTcIA6cNfMjkIzfrNIpNA5h-6J-~BTEfhfyfk7V-k08d0KmxPg7ZgxU14YM2bsQ3Nbga4L16B-S-nnRLHNAuVXWDC3a5QVj9lnD3PhL4PMSkwSyRIDSV3uTVAQuVG6f7I8goolOLkFOlOCAiTtu0PTGbIs0DhVlLDTzwXtKujiKMuAeb5D9CyYe85zcqm3N6eUqwGHbJdOpohEQwQkp8yvCMp-JjXvjcXdNqKbA2y2JjTTVbKAnDkmWAHLAgApAbEjHMlCMeNWZg55CLrTImpzYAGRECGek-3DBx35bWZIA__",
      language: "EN",
    },
    {
      title: "Pitchdeck DE",
      description:
        "In the Blockrose Club ecosystem, the virtual and physical worlds come together.",
      iconName: "Presentation",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/bf93/f15e/7bbeaf476da120617f3dfd09c86ba3fc?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OFlkNzfiuHKlhy6HjF2bcrJdE-il6QJtq6tsZAhVzD-Lm5EDYx7Yc~Cjl7QJCz-0~QwAUZGgc8f4nzPSCJSev8IfbXWBMRZB2TLgL5fkTqaqfzq3Hke5XPY7BeeM5Yt~doM-wKQ-LhCsIZh3gzFYlAXiNtjL6qscB9oMiFiHCspTRnsIq-Of6BUC-VVOcWS-w8T3~sSaRCQ0YLNQZVxvRUnbmfN11miV8qn-Nmi3QHXk-oUE8p-3mcxQyspNLJvwS-nWBsbQ73WiCy6JhuB5mS6pu6HUgKMaz~KGxZH-U7nrMCPDXTnpiO746z2IxYJ2vY4HRERbpJJhSq1GxZLb6Q__",
      language: "DE",
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Documents: Whitepaper & Pitch Deck
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Blockrose Club Targets The Most Active And Technology Savvy Target
            Group In The DACH Region And Will Later Expand To Serve The Global
            Market.
          </p>
        </div>

        {/* Documents Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {documents.map((doc) => {
            const Icon = (Icons[doc.iconName] as React.ElementType) || File;

            return (
              <motion.div
                key={doc.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <motion.img
                      src={doc.imageUrl}
                      alt={doc.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardHeader className="relative">
                    <div className="absolute -top-8 left-4 bg-primary rounded-full p-2">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="mt-4">{doc.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      {doc.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Newsletter Subscription */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Stay Updated With Us</h3>
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Email Address To Subscribe Our Newsletter"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
              />
              <button className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
