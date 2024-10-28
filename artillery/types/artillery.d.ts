import { EventEmitter } from "events";

export type ArtilleryVUContext = {
  vars: {
    target: string;
    $environment: undefined;
    $processEnvironment: {
      LOCAL_WORKER_ID: string;
      HOME: string;
      PLAYWRIGHT_BROWSERS_PATH: string;
      LC_ALL: string;
      LANG: string;
      HOSTNAME: string;
      PATH: string;
      [key: string]: string; // その他の環境変数に対応
    };
    $env: {
      LOCAL_WORKER_ID: string;
      HOME: string;
      PLAYWRIGHT_BROWSERS_PATH: string;
      LC_ALL: string;
      LANG: string;
      HOSTNAME: string;
      PATH: string;
      [key: string]: string; // その他の環境変数に対応
    };
    $testId: string;
    $dirname: string;
    $scenarioFile: string;
    $uuid: string;
    [key: string]: any; // 任意の追加フィールドを許可
  };
  funcs: {
    $randomNumber: () => number;
    $randomString: () => string;
    $template: (template: string, context: any) => string;
  };
  scenario: {
    name: string;
    engine: string;
    testFunction: string;
    afterResponse: string[];
    onError: string[];
    beforeRequest: string[];
    flow: any[]; // flowの具体的な型はシナリオによって異なる可能性があります
    weight: number;
  };
  _uid: string;
};

type EE = {
  fn: (...args: any[]) => void;
  context: any;
  once: boolean;
};

type ArtilleryEvents = EventEmitter & {
  _events: {
    counter: EE;
    customStat: EE;
    summary: EE;
    histogram: EE;
    rate: EE;
    started: EE;
    error: EE;
    [key: string]: EE;
  };
  _eventsCount: number;
};

// // イベントハンドラの型定義
// type CounterHandler = (name: string, value: number) => void;
// type CustomStatHandler = (name: string, value: number) => void;
// type SummaryHandler = (report: any) => void;
// type HistogramHandler = (name: string, value: number) => void;
// type RateHandler = (name: string, value: number) => void;
// type StartedHandler = () => void;
// type ErrorHandler = (error: Error) => void;

// // イベントエミッターのメソッドを拡張した型定義
// interface ArtilleryEventEmitter extends EventEmitter {
//   on(event: "counter", listener: CounterHandler): this;
//   on(event: "customStat", listener: CustomStatHandler): this;
//   on(event: "summary", listener: SummaryHandler): this;
//   on(event: "histogram", listener: HistogramHandler): this;
//   on(event: "rate", listener: RateHandler): this;
//   on(event: "started", listener: StartedHandler): this;
//   on(event: "error", listener: ErrorHandler): this;

//   emit(event: "counter", name: string, value: number): boolean;
//   emit(event: "customStat", name: string, value: number): boolean;
//   emit(event: "summary", report: any): boolean;
//   emit(event: "histogram", name: string, value: number): boolean;
//   emit(event: "rate", name: string, value: number): boolean;
//   emit(event: "started"): boolean;
//   emit(event: "error", error: Error): boolean;
// }

type ArtilleryTest = {
  step: (name: string, fn: () => Promise<void>) => Promise<void>;
};
