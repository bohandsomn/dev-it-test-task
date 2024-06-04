export type IWithSetter<State> = State & {
    setState(callback: (state: State) => Partial<State>): void
    setState(state: Partial<State>): void
}
