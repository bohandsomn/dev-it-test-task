export interface IUseState<State> {
    (): State
    <SelectorOutput>(selector: (state: State) => SelectorOutput): SelectorOutput
}

export interface IUseDispatch<State> {
    (): (partial: ((state: State) => Partial<State>) | Partial<State>) => void
}
