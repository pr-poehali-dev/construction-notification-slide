import Icon from '@/components/ui/icon';

const HOUSE_IMAGE = "https://cdn.poehali.dev/projects/d7a4edf2-d889-4a46-ae7f-a7e05b527450/files/554208c2-c3e8-405f-8dce-4937d6ab8c09.jpg";

const infoRows = [
  { label: "Вид разрешённого использования", value: "Индивидуальное жилищное строительство" },
  { label: "Категория земель", value: "Земли населённых пунктов" },
  { label: "Тип объекта", value: "Жилой дом" },
  { label: "Этажность", value: "2 надземных этажа" },
  { label: "Высота", value: "Не более 12 м" },
  { label: "Площадь застройки", value: "Не более 1 500 м²" },
];

const stepsStart = [
  {
    num: "01",
    icon: "FileText",
    title: "Подача уведомления",
    desc: "Направить уведомление о планируемом строительстве в уполномоченный орган",
  },
  {
    num: "02",
    icon: "Search",
    title: "Проверка документов",
    desc: "Орган проверяет соответствие параметров градостроительным требованиям",
  },
  {
    num: "03",
    icon: "MessageSquare",
    title: "Получение ответа",
    desc: "Орган направляет уведомление о соответствии или несоответствии в течение 7 рабочих дней",
  },
  {
    num: "04",
    icon: "HardHat",
    title: "Начало строительства",
    desc: "После положительного ответа можно приступать к строительным работам",
  },
];

const stepsEnd = [
  {
    num: "01",
    icon: "ClipboardCheck",
    title: "Завершение работ",
    desc: "Завершить строительство и подготовить технический план объекта",
  },
  {
    num: "02",
    icon: "Send",
    title: "Подача уведомления",
    desc: "Направить уведомление об окончании строительства не позднее 1 месяца после завершения работ",
  },
  {
    num: "03",
    icon: "Eye",
    title: "Осмотр объекта",
    desc: "Уполномоченный орган вправе провести осмотр построенного объекта на соответствие параметрам",
  },
  {
    num: "04",
    icon: "Award",
    title: "Направление в Росреестр",
    desc: "Орган самостоятельно направляет документы в Росреестр для постановки на кадастровый учёт",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#f2f4f7] font-ibm">

      {/* Header */}
      <header className="bg-[hsl(213,72%,28%)] text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
              <Icon name="Building2" size={20} className="text-white" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-blue-200 font-montserrat">Администрация</p>
              <p className="text-sm font-semibold font-montserrat leading-tight">Уполномоченный орган</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-blue-100">
            <Icon name="Phone" size={15} />
            <span>+7 (800) 000-00-00</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[480px] md:h-[560px] overflow-hidden">
        <img
          src={HOUSE_IMAGE}
          alt="Жилой дом ИЖС"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(213,72%,15%)]/90 via-[hsl(213,72%,20%)]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(213,72%,10%)]/60 to-transparent" />

        <div className="relative h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
          <div className="animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[hsl(40,85%,48%)] text-white px-4 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-widest font-montserrat mb-5">
              <Icon name="AlertCircle" size={13} />
              Официальный документ
            </div>
            <h1
              className="font-montserrat text-white text-3xl md:text-5xl leading-tight max-w-xl mb-4"
              style={{ fontWeight: 800 }}
            >
              Уведомление<br />
              о строительстве<br />
              <span style={{ color: 'hsl(40,85%,60%)' }}>ИЖС</span>
            </h1>
            <p className="text-blue-100 text-base md:text-lg max-w-md leading-relaxed">
              Уведомление о планируемом строительстве объекта индивидуального жилищного строительства
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mt-8 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <div className="flex items-center gap-2 text-blue-100 text-sm">
              <Icon name="Calendar" size={15} className="text-[hsl(40,85%,60%)]" />
              <span>Статья 51.1 ГрК РФ</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100 text-sm">
              <Icon name="MapPin" size={15} className="text-[hsl(40,85%,60%)]" />
              <span>Населённые пункты РФ</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100 text-sm">
              <Icon name="Clock" size={15} className="text-[hsl(40,85%,60%)]" />
              <span>Ответ — 7 рабочих дней</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 py-12">

        {/* Параметры объекта */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-7 bg-[hsl(213,72%,28%)] rounded-full" />
              <h2 className="font-montserrat font-bold text-xl text-[hsl(215,35%,12%)]">
                Параметры объекта строительства
              </h2>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              {infoRows.map((row, i) => (
                <div
                  key={i}
                  className={`flex flex-col sm:flex-row sm:items-center px-6 py-4 gap-1 sm:gap-4 ${
                    i < infoRows.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <span className="text-sm text-[hsl(215,15%,55%)] sm:w-56 shrink-0">
                    {row.label}
                  </span>
                  <span className="text-sm font-semibold text-[hsl(215,35%,12%)] font-montserrat">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Статус карточка */}
          <div className="flex flex-col gap-4">
            <div className="bg-[hsl(213,72%,28%)] text-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="ShieldCheck" size={20} className="text-[hsl(40,85%,60%)]" />
                <span className="font-montserrat font-semibold text-sm uppercase tracking-wide">
                  Правовая основа
                </span>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                Градостроительный кодекс Российской Федерации
              </p>
              <div className="bg-white/10 rounded px-3 py-2 text-center">
                <p className="text-white font-montserrat font-bold text-lg">Ст. 51.1</p>
                <p className="text-blue-200 text-xs">ГрК РФ</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Info" size={18} className="text-[hsl(213,72%,28%)]" />
                <span className="font-montserrat font-semibold text-sm text-[hsl(215,35%,12%)]">
                  Срок действия
                </span>
              </div>
              <p className="text-[hsl(215,15%,55%)] text-sm leading-relaxed">
                Уведомление действует в течение <strong className="text-[hsl(215,35%,12%)]">10 лет</strong> со дня выдачи
              </p>
            </div>
          </div>
        </div>

        {/* Уведомление о начале строительства */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[hsl(213,72%,28%)] flex items-center justify-center">
              <Icon name="HardHat" size={16} className="text-white" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[hsl(215,15%,55%)] font-montserrat">Этап 1</div>
              <h2 className="font-montserrat font-bold text-xl text-[hsl(215,35%,12%)] leading-tight">
                Уведомление о начале строительства
              </h2>
            </div>
          </div>
          <p className="text-sm text-[hsl(215,15%,55%)] ml-11 mb-6">
            Подаётся до начала строительных работ. Основание — ст. 51.1 ГрК РФ.
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            {stepsStart.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-200"
              >
                <div className="absolute top-3 right-4 font-montserrat font-bold text-5xl text-gray-50 leading-none select-none">
                  {step.num}
                </div>
                <div className="w-10 h-10 rounded-lg bg-[hsl(213,72%,28%)]/10 flex items-center justify-center mb-4">
                  <Icon name={step.icon} fallback="Circle" size={20} className="text-[hsl(213,72%,28%)]" />
                </div>
                <h3 className="font-montserrat font-bold text-sm text-[hsl(215,35%,12%)] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-[hsl(215,15%,55%)] leading-relaxed">
                  {step.desc}
                </p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[hsl(213,72%,28%)] group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Разделитель */}
        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 h-px bg-gray-200" />
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
            <Icon name="ArrowDown" size={13} className="text-[hsl(215,15%,55%)]" />
            <span className="text-xs text-[hsl(215,15%,55%)] font-montserrat font-semibold uppercase tracking-wide">Затем</span>
          </div>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Уведомление об окончании строительства */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[hsl(145,55%,35%)] flex items-center justify-center">
              <Icon name="CheckCircle" size={16} className="text-white" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[hsl(215,15%,55%)] font-montserrat">Этап 2</div>
              <h2 className="font-montserrat font-bold text-xl text-[hsl(215,35%,12%)] leading-tight">
                Уведомление об окончании строительства
              </h2>
            </div>
          </div>
          <p className="text-sm text-[hsl(215,15%,55%)] ml-11 mb-6">
            Подаётся не позднее 1 месяца после завершения строительства. Основание — ст. 55 ГрК РФ.
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            {stepsEnd.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-200"
              >
                <div className="absolute top-3 right-4 font-montserrat font-bold text-5xl text-gray-50 leading-none select-none">
                  {step.num}
                </div>
                <div className="w-10 h-10 rounded-lg bg-[hsl(145,55%,35%)]/10 flex items-center justify-center mb-4">
                  <Icon name={step.icon} fallback="Circle" size={20} className="text-[hsl(145,55%,35%)]" />
                </div>
                <h3 className="font-montserrat font-bold text-sm text-[hsl(215,35%,12%)] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-[hsl(215,15%,55%)] leading-relaxed">
                  {step.desc}
                </p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[hsl(145,55%,35%)] group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Необходимые документы */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-[hsl(210,20%,97%)] border-b border-gray-200 px-6 py-4 flex items-center gap-3">
            <Icon name="Paperclip" size={18} className="text-[hsl(213,72%,28%)]" />
            <h2 className="font-montserrat font-bold text-base text-[hsl(215,35%,12%)]">
              Необходимые документы
            </h2>
          </div>
          <div className="grid md:grid-cols-2">
            {[
              "Паспорт заявителя (документ, удостоверяющий личность)",
              "Правоустанавливающие документы на земельный участок",
              "Схема планировочной организации земельного участка",
              "Описание внешнего облика объекта (при необходимости)",
            ].map((doc, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 px-6 py-4 ${i % 2 === 0 ? 'md:border-r' : ''} ${i < 2 ? 'border-b' : ''} border-gray-100`}
              >
                <div className="w-5 h-5 rounded-full bg-[hsl(213,72%,28%)] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="Check" size={11} className="text-white" />
                </div>
                <span className="text-sm text-[hsl(215,25%,25%)] leading-relaxed">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[hsl(213,72%,22%)] text-white mt-6">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Icon name="Building2" size={18} className="text-blue-300" />
            <div>
              <p className="font-montserrat font-semibold text-sm">Уведомление о строительстве ИЖС</p>
              <p className="text-blue-300 text-xs">В соответствии с требованиями ГрК РФ</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-blue-200">
            <span className="flex items-center gap-1.5">
              <Icon name="Phone" size={13} />
              +7 (800) 000-00-00
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="Mail" size={13} />
              info@organization.ru
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}