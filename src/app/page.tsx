import FormulaireFiche from "@/components/FormulaireFiche";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <title>Génération de fiches de révision</title>
      <h1 className="text-3xl font-bold">Fiches de révision</h1>
      <p className="mt-2 text-gray-600">
        Collez un cours, obtenez une fiche de synthèse et des questions de révision.
      </p>
      <FormulaireFiche />
    </main>
  );
}