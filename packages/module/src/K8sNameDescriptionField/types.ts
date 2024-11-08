export type K8sNameDescriptionFieldData = {
  name: string;
  description: string;
  k8sName: {
    value: string;
    state: {
      /** The value cannot be changeable */
      immutable: boolean;
      /** If an invalid character was used */
      invalidCharacters: boolean;
      /** If the maxLength is exceeded */
      invalidLength: boolean;
      /**
       * Optional safe prefix for translation.
       * @see AdditionalCriteriaForTranslation
       */
      safePrefix?: string;
      /** Max length for the K8s name */
      maxLength: number;
      /** The user is now in control of the value; do not auto generate */
      touched: boolean;
    };
  };
};

type K8sNameDescriptionFieldUpdateFunctionTemplate<T> = (
  key: keyof K8sNameDescriptionFieldData,
  value: string // always the value; directly or k8sName.value
) => T;
export type K8sNameDescriptionFieldUpdateFunction = K8sNameDescriptionFieldUpdateFunctionTemplate<void>;
export type K8sNameDescriptionFieldUpdateFunctionInternal =
  K8sNameDescriptionFieldUpdateFunctionTemplate<K8sNameDescriptionFieldData>;

export type UseK8sNameDescriptionFieldData = {
  data: K8sNameDescriptionFieldData;
  onDataChange: K8sNameDescriptionFieldUpdateFunction;
};
